import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick} from "victory-native";



export default function CandleStick({candle}) {
  console.log(candle.usd)
  return (
      <View style={styles.container}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 25 }}
          scale={{ x: "time" }}
        >
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={candle[0]}
        />
        </VictoryChart>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

