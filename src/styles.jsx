import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #00b0fcff;
    width: 200px;
    border: 0.1px solid;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
`