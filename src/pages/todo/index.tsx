import TodoPageContent from '../../modules/common/components/TodoPageContent/TodoPageContent';
import { MainWrapper } from '../../modules/common/components/main-wrapper/main-wrapper';
import * as configcat from 'configcat-js-ssr';

type Props = {
  backgroundColorFlag: boolean;
};

export async function getServerSideProps() {
  const configCatClient = configcat.getClient(
    process.env.CONFIGCAT_CLIENT as string
  );

  const backgroundColorFlag = await configCatClient.getValueAsync(
    'pinkBackgroundColor',
    false
  );

  return { props: { backgroundColorFlag } };
}

const Todo = ({ backgroundColorFlag }: Props) => {
  return (
    <MainWrapper backgroundColorFlag={backgroundColorFlag}>
      <TodoPageContent />
    </MainWrapper>
  );
};

export default Todo;
