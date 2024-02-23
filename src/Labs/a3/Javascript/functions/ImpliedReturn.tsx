import React from "react";


function ImpliedReturn(){
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    return(
    <>
    <h3>Implied Return</h3>
    fourTimesFive = {fourTimesFive}<br />
    multiply(4, 5) = {multiply(4, 5)}<br />
    </>
    )
    console.log(fourTimesFive)
}

export default ImpliedReturn;              