import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


var BERK_API = [
    {title: "La méthode Running Lean", summary: "En lisant ce résumé, vous découvrirez une méthode immédiatement actionnable et simple d'utilisation, pour augmenter vos chances de réussite lors du développement de vos produits.\nVous découvrirez aussi :\n· Comment optimiser votre temps dans l'élaboration d'un nouveau produit\n· Quelles sont les étapes à suivre pour lancer un produit qui répond à un vrai besoin\n· La façon d'adapter votre idée initiale à la réalité du marché\n· Les bonnes méthodes pour fixer un prix qui satisfera vos clients et votre comptable\nLa méthode déroulée dans cet ouvrage décrit comment passer d'un plan initial à un plan efficace, sous contraintes de ressources et ce, même s'il n'a jamais été aussi peu cher de concevoir un produit. Pour cela, il faudra mettre en place un système de retours client qui ne consistera pas à leur demander ce qu'ils veulent, mais comment vous pouvez les aider à résoudre leurs problèmes. S'organiser de façon à valider rapidement son produit, en éliminant toute action superflue, voilà une des idées clés de cet ouvrage.", cover: "http://ecx.images-amazon.com/images/I/41dy4BcrS3L.jpg", readingTime: 19, id: 1},
    {title: "Lean startup", summary: "En lisant ce résumé, vous découvrirez comment appliquer la méthode Lean au développement de nouveaux produits, principalement dans les nouvelles technologies.\n\nVous apprendrez aussi que :\n· Le Lean Startup s'adresse à tous ceux qui portent un projet\n· L'expérimentation et le feedback sont au cœur de la méthode\n· Le Lean Startup est un système en mouvement, qui ne finit jamais d'évoluer et qu'il est important de maintenir\n· L'adoption de cette méthode et du bon état d'esprit fera économiser du temps à tous\nLa réussite de votre start-up - entendons par là des structures de toutes tailles qui conçoivent de nouveaux produits - passe par l'accomplissement de tâches ennuyeuses mais nécessaires, inclus dans des processus particuliers. La philosophie du lean manufacturing, de rationalisation et d'optimisation des processus, peut s'appliquer à l'innovation et dans tous les secteurs. Pour réussir, il faudra trouver un équilibre entre une planification trop rigide et un pilotage au gré des aléas.", cover: "http://ecx.images-amazon.com/images/I/41HYDlNlqsL.jpg", readingTime: 19, id: 2},
    {title: "Elon Musk", summary: "Ce livre raconte l’histoire d’Elon Musk, le fondateur de PayPal, Tesla et Space X. Le journaliste Ashlee Vance dresse le portrait d’un homme hors normes, qui souhaite changer le monde et parle même de coloniser Mars.\nVous découvrirez comment ce Sud-africain de 45 ans est devenu l’une des personnalités les plus marquantes de la Silicon Valley :\n- Son enfance à Pretoria et ses premiers pas d’entrepreneur en Californie\n- L’aventure PayPal et son éviction surprise de la présidence de la société\n- Space X et Tesla : comment les deux sociétés sont devenues les acteurs incontournables des industries aérospatiale et automobile\n- Le caractère hors du commun de Musk : une volonté de fer pour faire aboutir ses rêves les plus fous\n- Sa passion pour l’industrie aérospatiale et son but ultime : coloniser Mars\nCe visionnaire, à la personnalité controversée, ne semble pas avoir de limites. Comme Steve Jobs, Musk a réussi à révolutionner plusieurs industries, et marque toute une génération d’entrepreneurs.", cover: "http://ecx.images-amazon.com/images/I/51tdsT2BqsL.jpg", readingTime: 17, id: 3},
];

class Berk extends Component {
    render() {
        var berk = this.props.berk;
        return (
            <TouchableOpacity
                style={[styles.berkItem, this.props.open && styles.berkItemOpen]}
                onPress={() => this.props.onPress(berk)}
            >
                <Image source={{uri: berk.cover}} style={styles.berkCover}/>

                <View style={styles.berkInfo}>
                    <Text style={styles.berkTitle}>
                        {berk.title}
                    </Text>
                    <Text style={styles.berkReadingTime}>
                        Temps de lecture : {berk.readingTime} minutes
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class Berkoo extends Component {
    constructor(props) {
        super(props);
        this.state = {berks: BERK_API, openBerk: null};
    }

    handleBerkPress(berk) {
        this.setState({openBerk: berk.id});
        Alert.alert(berk.title, berk.summary, () => {this.setState({openBerk: null})});
    }

    _renderBerk(berk) {
        return <Berk key={berk.id} berk={berk} open={this.state.openBerk === berk.id} onPress={this.handleBerkPress.bind(this)}/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {this.state.berks.map(this._renderBerk.bind(this))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 30,
    },
    berkItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    berkItemOpen: {
        backgroundColor: "rgba(1, 120, 1, 0.2)",
    },
    berkTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    berkReadingTime: {
        flex: 1,
    },
    berkInfo: {
        flex: 1,
        flexDirection: "column",
    },
    berkCover: {
        width: 50,
        height: 76,
        marginRight: 10,
        resizeMode: Image.resizeMode.contain
    }
});

export default Berkoo;
