import React, { FunctionComponent, useEffect, useState } from 'react'
import cx from 'classnames';
import './pagination.css';

type PaginationDataType = {
    currentPage: number;
    totalPages: number;
    pageLimit: number;
    totalRecords: number;
}

export type PaginationProps = {
    totalRecords?: number;
    pageLimit?: number;
    onPageChanged?: (data: PaginationDataType) => void;
}

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

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
              pages = [LEFT_PAGE, ...extraPages, ...pages];
              break;
            }
    
            // handle: (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
              const extraPages = getPageRange(endPage + 1, endPage + spillOffset);
              pages = [...pages, ...extraPages, RIGHT_PAGE];
              break;
            }
    
            // handle: (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
              pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
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
    }, [currentPage, onPageChanged, pageLimit, totalPages, totalRecords]);

    const pages = getPageNumbers();
    return (
        <ul className='pagination'>
            {pages.map((page, index) => {
                if (page === LEFT_PAGE) return (
                    <li key={index} className='page-link-wrapper' onClick={handleMoveLeft}>
                        Prev
                    </li>
                )
                if (page === RIGHT_PAGE) return (
                    <li key={index} className='page-link-wrapper' onClick={handleMoveRight}>
                        Next
                    </li>
                )

                const pageLinkClasses = cx('page-link-wrapper', {
                    'page-link-wrapper--active': currentPage === page
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

export default Pagination
