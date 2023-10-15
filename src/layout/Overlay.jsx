import React, { useState } from "react";
import "../index.css";

function Overlay() {
  const item = [
    { name: "Home", href: "#" },
    { name: "Demo", href: "#" },
    { name: "Skills", href: "#" },
    { name: "About me", href: "#" },
  ];
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}>
      <a
        href=""
        style={{
          position: "absolute",
          bottom: 40,
          left: 90,
          fontSize: "13px",
        }}>
        Main framework
        <br />
        React fiber
      </a>
      <a
        href="./CV.pdf"
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          fontSize: "20px",
          borderRadius: "3rem",
          backgroundColor: "#4F46E5",
          color: "white",
          padding: "0.875rem",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        }}
        download={true}>
        Download CV
      </a>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          top: 40,
          left: 40,
          fontSize: "28px",
        }}>
        <div
          style={{
            flex: "1 1 0%",
          }}>
          {" "}
          <img
            style={{
              height: "2rem",
              width: "auto",
            }}
            src="/avatar.jpg"
            alt=""
          />
        </div>

        <div
          style={{
            marginLeft: "2.75rem",
            color: "white",
            display: "flex",
            textDecoration: "none",
            columnGap: "2rem",
          }}>
          <a
            href="mailto:trangbuiwork@gmail.com?subject=Contact%20Me&body=Hello%20Trang"
            style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: "2.5rem", height: "2.5rem", fill: "#6366F1" }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "2.5rem", height: "2.5rem", fill: "#6366F1" }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
          <a
            href="https://www.linkedin.com/in/trang-bui-profiles/message/"
            style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: "2.5rem", height: "2.5rem", fill: "#6366F1" }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}>
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}

export default Overlay;
