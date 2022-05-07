import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="h-25 my-auto align-middle align-items-center justify-content-center">
            <h1>404 - Not Found!</h1>
            <Link to="/" className="text-link">
                Go Home
            </Link>
        </div>
    );
}
