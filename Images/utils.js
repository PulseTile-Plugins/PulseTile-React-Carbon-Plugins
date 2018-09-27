export const fetchSeriesOnMount = ({
  componentDidMount() {
    this.props.actions.fetchSeriesRequest();
  },
});
