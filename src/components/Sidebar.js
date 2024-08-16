import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const Sidebar = () =>{
    return(
        <>
        <div className="row">
            <div className="col-md-3">
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                <i class="bi bi-speedometer2"></i><span>Dashboard</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-line fa-fw me-3"></i><span>Orders</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Products</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-lock fa-fw me-3"></i><span>Category</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    );
}

export default Sidebar;