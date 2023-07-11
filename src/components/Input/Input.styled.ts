import { styled } from '@mui/material/styles'

const Label = styled('label')`
  position: relative;
  flex-grow: 1;

  input {
    opacity: 0 !important;
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`

export default {
  Label
}
