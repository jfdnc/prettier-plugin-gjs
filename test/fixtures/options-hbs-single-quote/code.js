import Component from '@glimmerx/component';
import myHelper from '../myHelper';

export default class Page extends Component {
  <template>
    <div class="snazzy">
      <h1 class="header">Goodbye Moon</h1>
      {{myHelper "foo" greeting='Hello'}}
    </div>
  </template>
}
