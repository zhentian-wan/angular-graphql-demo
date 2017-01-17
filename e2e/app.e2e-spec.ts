import { GraphqlApolloDemoPage } from './app.po';

describe('graphql-apollo-demo App', function() {
  let page: GraphqlApolloDemoPage;

  beforeEach(() => {
    page = new GraphqlApolloDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
