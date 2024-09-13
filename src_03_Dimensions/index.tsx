import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

// 响应式布局，可以通过Dimensions.get('window').width获取屏幕的宽度
export default function Index() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>扫一扫</Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>付款码</Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>卡包</Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text style={[styles.h3]}>出行</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'        // 换行显示
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a',
    width: Dimensions.get('window').width / 3,
    height: 90,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  h3: {
    fontSize: 20
  }
})