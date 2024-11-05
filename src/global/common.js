import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexCenterColumn = css`
  flex-direction: column;
  ${flexCenter}
` 

export const flexCenterRow = css`
  flex-direction: row;
  ${flexCenter}
`

export const orangeBox = css`
  width  : 100px;
  height: 100px;
  background-color: orange;
`
