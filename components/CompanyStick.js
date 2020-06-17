import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryAxis, VictoryChart, VictoryTheme, VictoryCandlestick, VictoryLabel} from "victory-native";



export default function CompanyStick({candle, type}) {

  const sharedAxisStyles = {
    axis: {
      stroke: "transparent"
    },
    tickLabels: {
      fill: "black",
      fontSize: 14
    },
    axisLabel: {
      fill: "#e0aaff",
      padding: 36,
      fontSize: 15,
      fontStyle: "italic"
    }
  };

  return (
      <View style={styles.container}>

        <VictoryChart
          domainPadding={{ x: 30 }}
          scale={{ x: "time" }}
        >
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
          <VictoryCandlestick
            candleColors={{ positive: "#2b9348", negative: "#D80A0A" }}
            data={candle}
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

