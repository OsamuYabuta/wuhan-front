import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Tabs,
  Tab,
  Card,
  Table
} from 'react-bootstrap';

import axios from 'axios'


export default class Topics extends React.Component {

    langs = ["ja","ko","cn" , "en"]

    api_host = null;
    api_port = null;

    constructor(props) {
        super(props)

        this.state = {
            ja:[],
            ko:[],
            cn:[],
            en:[]
        };

        this.api_host = process.env.REACT_APP_API_HOST;
        this.api_port = process.env.REACT_APP_API_PORT;  
    }

    componentDidMount() {
        var self = this;
        this.langs.forEach(lang => {
            axios.get("http://" + this.api_host + ":" + this.api_port + "/topic/" + lang).then(function(res) {
                 self.setState({
                    [lang]:res.data.topics
                })
            }).then(function(res) {
                console.log(self.state.ja)
            })
        });
    }


    render() {
        const {
            ja,
            ko,
            cn,
            en 
        } = this.state;

        return (
            <Tabs defaultActiveKey="japanese" id="topics">
            <Tab eventKey="japanese" title="日本語">
              <Card>
                  <Card.Header>日本語トピック</Card.Header>
                  <Card.Body>
                      <Table bordered striped hover>
                          <thead>
                              <tr>
                                  <th>No</th>
                                  <th>トピック</th>
                                  <th>スコア</th>
                              </tr>
                          </thead>
                          <tbody>
                              {ja.map((topic) => {
                                  return (
                              <tr key={ topic.id }>
                                  <td>{ topic.id }</td>
                                  <td>{ topic.topic }</td>
                                  <td>{ topic.score }</td>
                              </tr>);
                              })}
                          </tbody>
                      </Table>
                  </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="korean" title="韓国語">
            <Card>
                  <Card.Header>韓国語トピック</Card.Header>
                  <Card.Body>
                      <Table bordered striped hover>
                          <thead>
                              <tr>
                                  <th>No</th>
                                  <th>トピック</th>
                                  <th>スコア</th>
                              </tr>
                          </thead>
                          <tbody>
                          {ko.map((topic) => {
                                  return (
                              <tr key={ topic.id }>
                                  <td>{ topic.id }</td>
                                  <td>{ topic.topic }</td>
                                  <td>{ topic.score }</td>
                              </tr>);
                              })}
                          </tbody>
                      </Table>
                  </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="chinese" title="中国語">
            <Card>
                  <Card.Header>中国語トピック</Card.Header>
                  <Card.Body>
                      <Table bordered striped hover>
                          <thead>
                              <tr>
                                  <th>No</th>
                                  <th>トピック</th>
                                  <th>スコア</th>
                              </tr>
                          </thead>
                          <tbody>
                          {cn.map((topic) => {
                                  return (
                              <tr key={ topic.id }>
                                  <td>{ topic.id }</td>
                                  <td>{ topic.topic }</td>
                                  <td>{ topic.score }</td>
                              </tr>);
                              })}
                          </tbody>
                      </Table>
                  </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="english" title="英語">
            <Card>
                  <Card.Header>英語トピック</Card.Header>
                  <Card.Body>
                      <Table bordered striped hover>
                          <thead>
                              <tr>
                                  <th>No</th>
                                  <th>トピック</th>
                                  <th>スコア</th>
                              </tr>
                          </thead>
                          <tbody>
                          {en.map((topic) => {
                                  return (
                              <tr key={ topic.id }>
                                  <td>{ topic.id }</td>
                                  <td>{ topic.topic }</td>
                                  <td>{ topic.score }</td>
                              </tr>);
                              })}
                          </tbody>
                      </Table>
                  </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        );
    }
}