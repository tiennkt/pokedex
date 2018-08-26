import * as React from "react";
import PokeService from "../services/pokeService";
import PokeEvo from "./pokemonDetailsView/PokeEvolution";

class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chain: {},
      loading: true
    };
  }

  public componentDidMount() {
    PokeService.getPokemonEvolutionChainById(43).then((chain: any) =>
      this.setState({
        chain,
        loading: false
      })
    );
  }

  public render() {
    return (
      <div>
        {JSON.stringify(this.state.chain)}
        {!this.state.loading && <PokeEvo chain={this.state.chain} color="red" />}
      </div>
    );
  }
}

// const Test = () => {
//   PokeService.getPokemonEvolutionChainById(43).then((chain: any) => (
//     <PokeEvo chain={chain} color="red" />
//   ));
// };

export default Test;