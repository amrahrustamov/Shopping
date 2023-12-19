import React from 'react';
import './pageNotFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function PageNotFound() {
  
	return (
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="page-404">
    <div class="outer">
        <div class="middle">
            <div class="inner">
                
                <div class="inner-circle"><i class="fa fa-home"></i><span>404</span></div>
                <span class="inner-status">NOT FOUND</span>
                <span class="inner-detail">
                   Bu sehifeye el catmaq mumkun deyil
                    <Link to="/" href="#/" class="btn btn-info mtl"><i class="fa fa-home"></i>&nbsp;
                        Return home
                    </Link> 
                </span>
            </div>
        </div>
    </div>
</div>
		</div>
	);
}
export default PageNotFound;
