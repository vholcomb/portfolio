"use client";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'

const contact = css`
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 24px 64px;
  margin-top: 24px;
  border-radius: 12px;
  background: linear-gradient(90deg,#18181b,#18181b),linear-gradient(90deg,#00dc82,#1de0b1,#36e4da);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-color: transparent;
  border-width: 1px;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }
`

const cardWrapper = css`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const card = css`
  height: 200px;
  width: 350px;
  border: 1px solid white;
  border-radius: 8px;
  margin: 24px;

  h2 {
    font-weight: normal;
    display: block;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  a {
    text-decoration: underline;
  }

  svg {
    margin-right: 12px;
  }

  &:hover {
    background: linear-gradient(90deg,#18181b,#18181b),linear-gradient(90deg,#00dc82,#1de0b1,#36e4da);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border-color: transparent;

    h2 {
      font-weight: bold;
    }
  }
`

const iconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ContactPage() {
  return (
    <div css={contact}>
      <h1>Contact</h1>
      <div css={cardWrapper}>
        <div css={card}>
          <h2>Email</h2>
          <div css={iconWrapper}>
            <EmailIcon />
            <a href="mailto:max.vholcomb78@gmail.com">vholcomb78@gmail.com</a>
          </div>
        </div>
        <div css={card}>
          <h2>LinkedIn</h2>
          <div css={iconWrapper}>
            <LinkedInIcon />
            <a href="https://www.linkedin.com/in/vicky-holcomb/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/vicky-holcomb</a>
          </div>
        </div>
        <div css={card}>
          <h2>Download Resume</h2>
          <div css={iconWrapper}>
            <DownloadForOfflineIcon />
            <a href="/VickyHolcombResume.pdf" download="VickyHolcombResume.pdf" target="_blank" rel="noreferrer">Vicky Holcomb Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
