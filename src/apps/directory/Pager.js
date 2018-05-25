import React from 'react';

import './pager.less';

export default ({pages = [], currentPage = 0, changePage = () => {}}) => (
  <ul className="directory-pager">
    <li className={`directory-page directory-page-direction meta ${currentPage === 0 && 'disabled'}`} onClick={()=>changePage(currentPage - 1)}><i className="fa fa-chevron-left" style={{marginRight: 5}}/> Prev</li>
    {
      pages.map((page) =>
        <li className={`directory-page ${currentPage === page ? 'active' : 'inactive'}`} onClick={()=>changePage(page)}>{page + 1}</li>
      )
    }
    <li className={`directory-page directory-page-direction meta ${currentPage === pages.length - 1 && 'disabled'}`} onClick={()=>changePage(currentPage + 1)}>Next <i className="fa fa-chevron-right" style={{marginLeft: 5}}/></li>
    <li className="directory-page directory-page-total">{currentPage === 0 ? <p><strong className="underline--orange">1 - 10</strong> of <strong>12</strong></p> : <p><span className="underline--orange">11 - 12</span> of <span className="underline--orange">12</span></p>}</li>
  </ul>


)