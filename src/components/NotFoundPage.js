// commit 33 import linmk and react
import React from 'react';
import {Link} from 'react-router-dom';
// commit 34 move from app router
const NotFoundPage = () => (
    <div>
      404! <Link to="/">Go home</Link> {/*add link comp. */}
    </div>
);
// commit 35 export
export default NotFoundPage;
