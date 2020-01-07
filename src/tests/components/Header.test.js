import Reacr from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('Should render header correctly', () => {
  const renderer = ReactShallowRenderer();
  renderer.render(<Header />);
});
