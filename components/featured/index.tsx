import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeaturedSection from "./FeaturedSection";

export default function Featured() {
  return (
    <ScrollView>
      <FeaturedSection id={1} title="Discounts" />
      <FeaturedSection id={2} title="Order it again" />
      <FeaturedSection id={3} title="New in town" />
    </ScrollView>
  );
}
