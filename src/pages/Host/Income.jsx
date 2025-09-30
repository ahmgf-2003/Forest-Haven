import { useEffect, useRef } from "react";

const Income = () => {
    const maxIncome = 5000
    const incomeTableRef = useRef(null);
    const MonthsDivsRef = useRef(null);

    useEffect(() => {
        if (incomeTableRef && MonthsDivsRef) {
            /*
                Calculate the usable height of the income table by subtracting 40px 
                (representing the combined height of the top and bottom labels)
                from the total income table height.
            */
            const height = incomeTableRef.current.offsetHeight - 40;

            MonthsDivsRef.current.childNodes.forEach(div => {
                let incomeRatio = maxIncome / div.dataset.income;
                div.style.cssText = `--height: ${height / incomeRatio}px`
            }) 
        }
    }, [])

    return ( 
        <div className="income">
            <h2 className="heading">
                Income
                <span className="last-days">Last <ins>30 days</ins></span>
            </h2>
            <h3 className="total-income">$2,260</h3>
            <div className="income-table" ref={incomeTableRef}>
                <div className="incomes">
                    <span>$5k</span>
                    <span>$4k</span>
                    <span>$3k</span>
                    <span>$2k</span>
                    <span>$1k</span>
                    <span>$0k</span>
                </div>
                <div className="months" ref={MonthsDivsRef}>
                    <span data-income="4000">Ju</span>
                    <span data-income="1200">Au</span>
                    <span data-income="3000">Se</span>
                    <span data-income="2800">Oc</span>
                    <span data-income="1500" className="active">No</span>
                    <span data-income="650" className="active">De</span>
                </div>
            </div>
            <div className="transactions">
                <h3>
                    Your transactions (3) 
                    <span className="last-days">Last <ins>30 days</ins></span>
                </h3>
                <div className="transaction">
                    <h4>$720</h4>
                    <p>1/12/25</p>
                </div>
                <div className="transaction">
                    <h4>$560</h4>
                    <p>10/11/25</p>
                </div>
                <div className="transaction">
                    <h4>$980</h4>
                    <p>23/11/25</p>
                </div>
            </div>
        </div>
    );
}

export default Income;