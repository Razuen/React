import React from 'react'

function UserDetail({ userDetails }) {
    return (
        <div className="userDetails">Hi, {userDetails.name ? userDetails.name : "User"}
            <style jsx>
                {`
            .userDetails {
                display: flex;
                align-items: center;
                padding: 5px;
              }
            `}
            </style>

        </div>
    )
}

export default UserDetail
