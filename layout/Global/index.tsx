import React from 'react'

export default function Global({ children }) {
  return (
    <>
      {children}

      <style global jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }

        a {
          color: #067df7;
          text-decoration: none;
          font-size: 14px;
        }

        h1,
        h2 {
          border-bottom: 1px solid #eaecef;
          padding-bottom: 0.3em;
          font-weight: bold;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: bold;
          line-height: 1.25;
        }

        h1 {
          margin: 0.67em 0;
          font-size: 2em;
        }

        table {
          margin-bottom: 16px;
          margin-top: 0;
          display: block;
          overflow: auto;
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
        }

        tr {
          background-color: #fff;
          border-top: 1px solid #c6cbd1;
        }

        tr:nth-child(2n) {
          background-color: #f6f8fa;
        }

        th,
        td {
          border: 1px solid #dfe2e5;
          padding: 6px 13px;
        }

        code {
          padding: 2px;
          background-color: #eeeeee;
        }
      `}</style>
    </>
  )
}
