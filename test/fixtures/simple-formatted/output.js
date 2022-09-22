import Component from '@glimmerx/component';

const StripWhitespace = <template></template>

const InlineText = <template> Hello World</template>

const HardlineText = <template>
  Hello World
</template>

const InlineTagWrappedText = <template><h1> Hello World </h1></template>

const HardlineTagText = <template>
  <h1>
    Hello World
  </h1>
</template>

export default class Simple extends Component {
  <template>
    <StripWhiteSpace />
    <InlineText />
    <HardlineText />
    <InlineTagWrappedText />
    <HardlineTagText />
  </template>
}
