import React from 'react';


function BurgerIngredients() {


        return (
                <>
                        <section>
                                <h1></h1>
                                <div style={{ display: 'flex' }}>
                                        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                                        Булки
                                        </Tab>
                                        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                                        Соусы
                                        </Tab>
                                        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                                        Начинки
                                        </Tab>
                                </div>
                        </section>
                        <section>
                                // cycle for tab data 
                                <div>
                                        // use cylce for function one ingredinet
                                </div>
                        </section>
                </>
        );
}


export default BurgerIngredients; 