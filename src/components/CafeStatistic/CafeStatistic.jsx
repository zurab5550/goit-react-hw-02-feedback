import React,{Component} from 'react'
// import styles from './CafeStatistic.module.css'
import Notification from "../Notification"
import PropTypes from 'prop-types'
import Section from "../Section"
import FeedBackOptions from "../FeedBackOptions"
import Statistic from "../Statistic"


class CafeStatistic extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
}


    handleClick = (statName) => {
        this.setState((state) => {
            const prevValue = state[statName];
            return {
            [statName]: prevValue + 1
            }            
        })
    }

    countTotalFeedback = () => {
        const stats = Object.values(this.state);
        const sum = stats.reduce((acum, value) => acum + value);
        return sum;
    }

    countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        const total = this.countTotalFeedback()
        if (!total) {
            return 0
        }
        const totalSum = ((good / total) * 100).toFixed(0);

        return totalSum
        
    }

    createFeedbackOptions = () => {
        const feedbackOptions = [
            
            {
                id: "1",
                name: "good",
                onClick:()=>this.handleClick("good")
            },
            {
                id: "2",
                name: "neutral",
                onClick:()=>this.handleClick("neutral")
            },
            {
                id: "3",
                name: "bad",
                onClick:()=>this.handleClick("bad")
            }]
        return feedbackOptions
    }
    
    render() {
         const total = this.countTotalFeedback()
        
        
        return (
            <>
                <Section title="Please leave feedback">
                <FeedBackOptions options={this.createFeedbackOptions()} />

                </Section>
                <Section title="Statistics">
                    {total ? <Statistic {...this.state} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} />
                    : <Notification message="No feedback given" />}
                    
                </Section>
               
           
                
        </>)
    }
}
 
export default CafeStatistic;

