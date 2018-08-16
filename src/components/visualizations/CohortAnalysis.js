import React from 'react';
import './cohort-analysis.less';
import { VictoryChart, VictoryArea, VictoryLabel, VictoryAxis } from 'victory';

/*
 x = score
 y = count
*/
const data = [
  { x: 5, y: 0},
  { x: 4.5, y: 22 },
  { x: 3.5, y: 9 },
  { x: 2.5, y: 11 },
  { x: 1.5, y: 3 },
  { x: .5, y: 2},
  { x: 0, y: 0}
]

export default () => (
  <div className="cohort">
    <div className="cohort__score cohort__score-green"><span className="meta">4.9</span></div>
    <div className="cohort__details">
      <h4 className="cohort__details-title"><strong>4th Grade Harrison Middle School</strong></h4>
      <h5 className="cohort__details-subtitle"><strong><i className="circle-icon--small far fa-envelope" /> <span className="underline--orange">55 </span> responses from <i className="circle-icon--small far fa-user" /> <span className="underline--orange">22 </span> people</strong></h5>
    </div>
    <button className="btn btn-default" data-target="#collpsable" data-toggle="collapse">Details</button>
    <div className="cohort__content">
      <div className="collapse" id="collpsable" style={{width: "100%"}}>
        <svg style={{visibilty: 'hidden', position: 'absolute', 'pointer-events': 'none'}}>
          <defs>
            <linearGradient id="myGradient"
              x1="0%" y1="0%" x2="100%" y2="0%"
            >
              <stop offset="0%"   stopColor="#E59062"/>
              <stop offset="20%"   stopColor="#E59062"/>
              <stop offset="20%"   stopColor="#FFD299"/>
              <stop offset="40%"   stopColor="#FFD299"/>
              <stop offset="40%"   stopColor="#F3F9C5"/>
              <stop offset="60%"   stopColor="#F3F9C5"/>
              <stop offset="60%"   stopColor="#9ED7B7"/>
              <stop offset="80%"   stopColor="#9ED7B7"/>
              <stop offset="80%"   stopColor="#51BE9B"/>
              <stop offset="100%" stopColor="#51BE9B"/>
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart
          height={100}
          padding={30}
        >
          <VictoryAxis
            dependentAxis
            style={{
              axis: {
                stroke: "none"
              },
              tickLabels: {
                fontSize: 5,
                fontWeight: 600,
                fontFamily: '"Open Sans", sans-serif',
              }
            }}
          />
          <VictoryAxis
            crossAxis
            style={{
              axis: {
                stroke: "rgba(0,0,0, .3)",
                strokeWidth: "3px",
              },
              tickLabels: {
                fontSize: 5,
                fontWeight: 600,
                fontFamily: '"Open Sans", sans-serif',
              }
            }}
          />
          <VictoryArea
            domain={{x: [0, 5]}}
            interpolation="natural"
            style={{
              parent: {border: "3px solid rgba(0,0,0,.2)"},
              data: { fill: "url(#myGradient)",
                      stroke: "rgba(0,0,0,.2)" },
            }}
            data={data}
            labelComponent={<VictoryLabel style={{fontSize: 5, fontWeight: 600, fontFamily: '"Open Sans", sans-serif'}} renderInPortal dy={-5}/>}
            labels={(datum) => datum.y !== 0 ? datum.y : '' }
          />

        </VictoryChart>
      </div>
    </div>
  </div>
)