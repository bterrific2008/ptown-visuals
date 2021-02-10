import React from 'react';

import { CytoscapeComponent } from '../components/Graph';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Graph = () => (
  <Main meta={<Meta title="Lmao" description="Lorem ipsum" />}>
    <h1>Pleasanton City Council Visualization</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
      Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae
      autem esse explicabo molestias officia placeat, accusamus aut saepe.
    </p>
    <div className="grid grid-cols-5">
      <div>1</div>
      <div className="col-span-4">
        <CytoscapeComponent />
      </div>
    </div>
  </Main>
);

export default Graph;
