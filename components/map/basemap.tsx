"use client";
import type { DeckProps, Layer } from "@deck.gl/core";
import { MapboxOverlay } from "@deck.gl/mapbox";
import "maplibre-gl/dist/maplibre-gl.css";
// biome-ignore lint/suspicious/noShadowRestrictedNames: biome-ignore lint: false positive
import { Map, useControl } from "react-map-gl/maplibre";

function DeckGLOverlay(props: DeckProps) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

interface IBaseMapProps {
  layers?: Layer[];
  height?: string;
  width?: string;
}

export default function BaseMap(props: IBaseMapProps) {
  const { layers = [], height = "100vh", width = "100vw" } = props;
  return (
    <Map
      initialViewState={{
        longitude: 0.45,
        latitude: 51.47,
        zoom: 11,
      }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      style={{ height: height, width: width }}
    >
      <DeckGLOverlay layers={layers} />
    </Map>
  );
}
