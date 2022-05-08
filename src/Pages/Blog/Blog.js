import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>
            <div className='bg-success p-2 text-dark bg-opacity-25'>
                <h2 className='text-success bg-light my-3 p-2 text-start'><span className='text-dark'>Q:1</span> Difference Between JavaScript and NodeJS</h2>
                <p>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>JavaScript</th>
                                    <th>NodeJS</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                    <td>NodeJS is a Javascript runtime environment.</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Javascript can only be run in the browsers.</td>
                                    <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>

                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                    <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>

                                </tr>

                            </tbody>
                        </Table>
                    </div>

                </p>


            </div>
            <div className='bg-success p-2 text-dark bg-opacity-10'>
                <h2 className='text-success bg-light my-3 p-2 text-start'><span className='text-dark'>Q:2</span> When should you use NodeJs and when should you use MongoDB?</h2>
                <div className=''>
                    <p className='text-start'>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                    <p className='text-start'>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>

                </div>
            </div>
            <div className='bg-success p-2 text-dark bg-opacity-25'>
                <h2 className='text-success bg-light my-3 p-2 text-start'><span className='text-dark'>Q:3</span> Difference Between SQL and NoSQL</h2>

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>SQL</th>
                                <th>NoSQL</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SQL related to RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
                                <td>NoSQL related to Non-relational or distributed database system.</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>

                            </tr>
                            <tr>
                                <td>4</td>
                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queries</td>

                            </tr>


                        </tbody>
                    </Table>
                </div>


            </div>
        </div>
    );
};

export default Blog;