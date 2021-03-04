import React, { FunctionComponent, useEffect, useState } from 'react'

interface PaginationProps {
    totalRecords?: number;
    pageLimit?: number;
    pageNeighbours?: number;
}

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const Pagination: FunctionComponent<PaginationProps> = ({
    totalRecords = 0,
    pageLimit = 20,
    pageNeighbours = 0
}) => {
    const totalPages: number = Math.ceil(totalRecords / pageLimit);
    const [currentPage] = useState<number>(1);

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
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;
    
        if (totalPages > totalBlocks) {
          const startPage = Math.max(2, currentPage - pageNeighbours);
          const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
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

    useEffect(() => {
        console.log("getPageNumbers: ", getPageNumbers());
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Pagination
