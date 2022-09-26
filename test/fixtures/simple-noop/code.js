import Component from '@glimmerx/component';

// const NoText = <template></template>
const NoText = <template></template>

// const InlineText = <template>Hello World</template>
const InlineText = <template>Hello World</template>

// const HardlineText = <template>
//   Hello World
// </template>
const HardlineText = <template>
  Hello World
</template>

// const InlineTagWrappedText = <template><h1>Hello World</h1></template>
const InlineTagWrappedText = <template><h1>Hello World</h1></template>

// const HardlineTagText = <template>
//   <h1>
//     Hello World
//   </h1>
// </template>
const HardlineTagText = <template>
  <h1>
    Hello World
  </h1>
</template>

// Should fix indent
export default class Simple extends Component {
  <template>
    <NoText />
    <InlineText />
    <HardlineText />
    <InlineTagWrappedText />
    <HardlineTagText />
  </template>
}