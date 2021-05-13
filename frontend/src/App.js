import React, { Component } from "react";
import "../src/assets/css/sb-admin-2.min.css";
import "../src/assets/vendor/fontawesome-free/css/all.min.css";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <Sidebar></Sidebar>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Header></Header>

              <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                  <a
                    href="#"
                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i class="fas fa-download fa-sm text-white-50"></i>
                    Generate Report
                  </a>
                </div>

                <div class="row">
                  <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card card-status border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters text-left">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Days to Payday
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                              3
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters text-left">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Date of Next Payday
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                              $215,000
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters text-left">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-info text-success text-uppercase mb-1">
                              Payroll Period
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                              Apr 16, 2021 - Apr 30, 2021
                            </div>
                          </div>
                          <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-5 mb-xl-0">
                    <div class="card shadow mb-4 text-left">
                      <div class="card-header py-3 bg-white">
                        <div class="row no-gutters align-items-center">
                          <div class="col">
                            <h6 class="m-0 font-weight-bold text-secondary">
                              Illustrations
                            </h6>
                          </div>
                          <div class="col text-right">
                            <button
                              type="button"
                              class="btn btn-sm btn-primary font-weight-bold"
                            >
                              See all
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="card-table">
                        <table class="table mb-0">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                class="small font-weight-bold text-uppercase bg-light border-0"
                              >
                                Period
                              </th>
                            </tr>
                          </thead>
                          <tbody class="small font-weight-bold">
                            <tr>
                              <td>
                                <a href="http://">May 5, 2021</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="http://">April 20, 2021</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-5 mb-xl-0">
                    <div class="card shadow mb-4 text-left">
                      <div class="card-header py-3 bg-white">
                        <div class="row no-gutters align-items-center">
                          <div class="col">
                            <h6 class="m-0 font-weight-bold text-secondary">
                              Company Documents
                            </h6>
                          </div>
                          <div class="col text-right">
                            <button
                              type="button"
                              class="btn btn-sm btn-primary font-weight-bold"
                            >
                              See all
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="card-table">
                        <table class="table mb-0">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                class="small font-weight-bold text-uppercase bg-light border-0"
                              >
                                Period
                              </th>
                            </tr>
                          </thead>
                          <tbody class="small font-weight-bold">
                            <tr>
                              <td>
                                <a href="http://">Employee Handbook</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="http://">Company Guidelines</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="http://">Building Guidelines</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
