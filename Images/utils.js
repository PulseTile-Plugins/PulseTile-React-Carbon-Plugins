import _ from 'lodash/fp';

export const fetchSeriesOnMount = ({
  componentDidMount() {
    const { actions, match } = this.props;
    const userId = _.get('params.userId', match);
    const sourceId = _.get('params.sourceId', match);
    const source = 'orthanc';
    if (userId && sourceId) actions.fetchSeriesRequest({ userId, studyId: sourceId, source });
  },
});
