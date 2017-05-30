      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>

      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

        <Button
            style={{fontSize: 20}}
            title="login"
            onPress={this._onPressButton}>
            Press Me!
        </Button>

        <TextInput
            style={{height: 40}}
            placeholder="password"
            onChangeText={(text) => this.setState({text})}
        />


        class MyButton extends Component {
            _onPressButton() {
                console.log("You tapped the button!");
                poster.testConnection()
            }

            render() {
                return (
                    <TouchableHighlight onPress={this._onPressButton}>
                        <Text>Button</Text>
                    </TouchableHighlight>
                );
            }
        }
