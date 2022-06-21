import React, { Component } from 'react';
import Card from '../../components/ui/Card/Card.jsx';
import Today from '../../components/Today/Today.jsx';
import Exchange from '../../components/Exchange/Exchange.jsx';
import Weather from '../../components/Weather/Weather.jsx';
import Quote from '../../components/Quote/Quote.jsx';
import TasksWidget from '../../components/Tasks/Tasks.jsx';
import Habits from '../../components/Habits/Habits.jsx';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Card className="card card_transparent">
          <Today />
        </Card>
        <Card title="Exchange rates">
          <Exchange />
        </Card>
        <Card title="Weather">
          <Weather />
        </Card>
        <Card title="Tasks">
          <TasksWidget />
        </Card>
        <Card title="Daily motivation">
          <Quote />
        </Card>
        <Card title="Habit tracker">
          <Habits />
        </Card>
      </>
    );
  }
}
