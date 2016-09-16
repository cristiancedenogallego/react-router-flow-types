// @flow
type State = {[key: string]: any};
type Props = State;
type Query = State;
type Styles = State;

type Path = string | {
  pathname: string,
  query?: Query,
  hash?: string,
  state?: State,
}

export type RouteProps = {
  path?: string,
  component?: ReactClass<any>,
  components?: [ReactClass<any>],
  getComponent?: (nextState: State, callback: Function) => void,
  getComponents?: (nextState: State, callback: Function) => void,
  children?: any,
  onEnter?: (nextState: {[key: string]: any}, replace: Function, callback?: Function) => void,
  onChange?: (prevState: State, nextState: State, replace: Function, callback?: Function) => void,
  onLeave?: (prevState: State) => void,
};

export type PlainRoute = RouteProps & {
  childRoutes?: [PlainRoute],
  getChildRoutes?: (partialNextState: State, callback: Function) => void,
  indexRoute?: PlainRoute,
  getIndexRoute?: (partialNextState: State, callback: Function) => void,
};

export type RouterProps = {
  children: any,
  routes?: any,
  history?: any,
  createElement?: (Component: ReactClass<any>, props: Props) => ReactClass<any>,
  onError?: (error: Error) => void,
  onUpdate?: () => void,
  render?: (props: Props) => void,
};

export type LinkProps = {
  to: Path,
  activeClassName?: string,
  activeStyle?: Styles,
  onClick?: (e: MouseEvent) => void,
  onlyActiveOnIndex?: boolean,
}

export type IndexLinkProps = LinkProps & {
  withRouter: (Component: ReactClass<any>, options: {withRef: boolean}) => void,
}
