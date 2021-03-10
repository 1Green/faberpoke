import React, { FunctionComponent, useEffect, useState } from 'react'
import cx from 'classnames';
import styles from './pagination.module.css';

export type PaginationDataType = {
    currentPage: number;
    totalPages: number;
    pageLimit: number;
    totalRecords: number;
}

export type PaginationProps = {
    totalRecords?: number;
    pageLimit: number;
    onPageChanged?: (data: PaginationDataType) => void;
}

export enum PaginationButton {
    Prev = 'Prev',
    Next = 'Next',
}

export const Pagination: FunctionComponent<PaginationProps> = ({
    totalRecords = 0,
    pageLimit = 20,
    onPageChanged
}) => {
    const totalPages: number = Math.ceil(totalRecords / pageLimit);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const getPageRange = (from: number, to: number, step = 1): number[] => {
        const range = [];
        for (let i = from; i <= to; i += step) { range.push(i) }
        return range;
    }

    const getPageNumbers = (): Array<string | number> => {
        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
         */
        const totalNumbers = 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
          const startPage = Math.max(2, currentPage);
          const endPage = Math.min(totalPages - 1, currentPage);
          let pages: Array<string | number> = getPageRange(startPage, endPage);
    
          /**
           * hasLeftSpill: has hidden pages to the left
           * hasRightSpill: has hidden pages to the right
           * spillOffset: number of hidden pages either to the left or to the right
           */
          const hasLeftSpill = startPage > 2;
          const hasRightSpill = (totalPages - endPage) > 1;
          const spillOffset = totalNumbers - (pages.length + 1);
    
          switch (true) {
            // handle: (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
              const extraPages = getPageRange(startPage - spillOffset, startPage - 1);
              pages = [PaginationButton.Prev, ...extraPages, ...pages];
              break;
            }
    
            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
              const extraPages = getPageRange(endPage + 1, endPage + spillOffset);
              pages = [...pages, ...extraPages, PaginationButton.Next];
              break;
            }
    
            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
              pages = [PaginationButton.Prev, ...pages, PaginationButton.Next];
              break;
            }
          }
          return [1, ...pages, totalPages];
        }
    
        return getPageRange(1, totalPages);
    }

    const goToPage = (page: number) => {
        setCurrentPage(page);
    }

    const handleClick = (page: string | number) => (evt: React.MouseEvent) => {
        evt.preventDefault();
        goToPage(page as number);
    }

    const handleMoveLeft = (evt: React.MouseEvent) => {
        evt.preventDefault();
        goToPage(currentPage - 1);
    }

    const handleMoveRight = (evt: React.MouseEvent) => {
        evt.preventDefault();
        goToPage(currentPage + 1)
    }

    useEffect(() => {
        const paginationData: PaginationDataType = {
            currentPage,
            totalPages,
            pageLimit,
            totalRecords
        }
        onPageChanged !== undefined && onPageChanged(paginationData);
    }, [currentPage, pageLimit, totalPages, totalRecords, onPageChanged]);

    const pages = getPageNumbers();
    return (
        <ul className={styles.pagination}>
            {pages.map((page, index) => {
                if (page === PaginationButton.Prev) return (
                    <li key={index} className={styles.link} onClick={handleMoveLeft}>
                        Prev
                    </li>
                )
                if (page === PaginationButton.Next) return (
                    <li key={index} className={styles.link} onClick={handleMoveRight}>
                        Next
                    </li>
                )

                const pageLinkClasses = cx(styles.link, {
                    [styles.linkActive as string]: currentPage === page
                })
                return (
                    <li key={index} className={pageLinkClasses} onClick={handleClick(page)}>
                        {page}
                    </li>
                )
            })}
        </ul>
    )
}

export default Pagination;
