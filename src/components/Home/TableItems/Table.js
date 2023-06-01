import React, { useContext } from 'react';
import { Row, Tab, Tabs } from 'react-bootstrap';
import './table.css'
import { OnionContext } from '../../../App';
import BreakFast from './BreakFast';
import Lunch from './Lunch';

const TableItems = () => {
    const [onion, setOnion] = useContext(OnionContext);
    const getBreakFast = onion.breakfast;
    const getLunch = onion.lunch;
    const getDinner = onion.dinner;
    // console.log(onion)
    return (
        <div className='tab-full'>
            <Tabs
                defaultActiveKey="item1"
                id="uncontrolled-tab-example"
                className="mb-3 tabs-main"
            >
                <Tab eventKey="item1" title="Breakfats">

                    <div className="table-items">
                        <Row>

                            {
                                Array.isArray(getBreakFast) ? (
                                    getBreakFast.map((item) => (
                                        <BreakFast
                                            key={item.id}
                                            item={item}

                                        ></BreakFast>
                                    ))
                                ) : (
                                    <p>Loading...</p> // or any other appropriate loading indicator
                                )
                            }
                        </Row>
                    </div>
                </Tab>
                <Tab eventKey="item2" title="Lunch">
                    <div className="table-items">
                        <Row>
                            {
                                Array.isArray(getLunch) ? (
                                    getLunch.map((item) => (
                                        <Lunch
                                            key={item.id}
                                            item={item}

                                        ></Lunch>
                                    ))
                                ) : (
                                    <p>Loading...</p> // or any other appropriate loading indicator
                                )
                            }
                        </Row>
                    </div>
                </Tab>
                <Tab eventKey="item3" title="Dinner">
                    <div className="table-items">
                        <Row>
                            {
                                Array.isArray(getDinner) ? (
                                    getDinner.map((item) => (
                                        <Lunch
                                            key={item.id}
                                            item={item}

                                        ></Lunch>
                                    ))
                                ) : (
                                    <p>Loading...</p> // or any other appropriate loading indicator
                                )
                            }
                        </Row>
                    </div>
                </Tab>
            </Tabs>
            <div className="tab-button text-center">
                <button>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default TableItems;