import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick, VictoryLabel} from "victory-native";



export default function CandleStick({candle, type}) {

  const sharedAxisStyles = {
    axis: {
      stroke: "transparent"
    },
    tickLabels: {
      fill: "#e0aaff",
      fontSize: 14
    },
    axisLabel: {
      fill: "#e0aaff",
      padding: 36,
      fontSize: 15,
      fontStyle: "italic"
    }
  };

  console.log(candle.usd)
  return (
      <View style={styles.container}>

        <VictoryChart
          domainPadding={{ x: 30 }}
          scale={{ x: "time" }}
        >
          <VictoryLabel
            text={`${type} Candle Stick`}
            x={180}
            y={40}
            textAnchor="middle"
            style={{ fill: "#e0aaff", fontSize: 16 }}
          />
          <VictoryAxis
            style={{
              ...sharedAxisStyles,
              grid: {
                fill: "#e0aaff",
                stroke: "#fff",
                pointerEvents: "painted",
                strokeWidth: 0.5
              }
            }}
            dependentAxis
          />
          <VictoryAxis
            style={{
              ...sharedAxisStyles,
              axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 }
            }}
          />
          <VictoryCandlestick
            candleColors={{ positive: "#2b9348", negative: "#D80A0A" }}
            data={candle}
            name = "usd candle chart"
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
  },
  title:{
    color:"black"
  }
});

