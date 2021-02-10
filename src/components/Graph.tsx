import React from 'react';

import cytoscape from 'cytoscape';

import * as Samples from './elements_city_council';

interface IProps {}

interface IState {
  cy?: any;
}

class CytoscapeComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.renderCytoscapeElement = this.renderCytoscapeElement.bind(this);
    this.state = {
      cy: null,
    };
  }

  componentDidMount() {
    this.renderCytoscapeElement();
  }

  renderCytoscapeElement() {
    console.log('* Cytoscape.js is rendering the graph..');
    console.log(Samples);

    const data: any = Samples.default;
    data.container = document.getElementById('cy');
    cytoscape(data);

    this.setState(
      {
        cy: cytoscape({
          container: document.getElementById('cy'),
          elements: data,
          style: [
            {
              selector: 'node',
              style: {
                label: 'data(name)',
                'text-wrap': 'wrap',
                'text-max-width': '210rem',
                width: '30rem',
                height: '30rem',
                'background-color': 'data(color)',
              },
            },
            {
              selector: 'edge',
              style: {
                label: 'data(name)',
                'line-color': 'data(color)',
              },
            },
          ],
          layout: {
            name: 'concentric',
            spacingFactor: 5,
          },
        }),
      },
      () => {
        console.log(this.state.cy);
        this.state.cy.center('20200505_agenda');
        this.state.cy.on('tap', 'node', (evt: any) => {
          const node = evt.target;
          console.log(`tapped ${node.id()}`);
        });
      },
    );
  }

  render() {
    const cyStyle = {
      // width: '1000px',
      border: '20px solid black',
    };

    return (
      <div>
        <div style={cyStyle} className="h-screen" id="cy" />
      </div>
    );
  }
}

export { CytoscapeComponent };
