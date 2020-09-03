import React, {useCallback, useRef, useState} from 'react';
import {Animated} from 'react-native';

import {arrowDown} from '../../general/images';

import {
  Container,
  Icon,
  Title,
  SelectField,
  Dropdown,
  Option,
  Select,
  CardTitle,
  Value,
} from './styles';

interface PickerProps {
  title: string;
  options: string[];
}

const Picker: React.FC<PickerProps> = ({options, title}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const heighDropdown = useRef(new Animated.Value(0)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;
  const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const [optionSelected, setOptionSelected] = useState();
  const [isOpened, setIsOpended] = useState(false);

  const openModal = useCallback(() => {
    setIsOpended(!isOpened);
    if (optionSelected) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: isOpened ? 0 : 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(heighDropdown, {
          toValue: isOpened ? 0 : 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {});
    } else {
      Animated.parallel([
        Animated.timing(scaleTitle, {
          toValue: isOpened ? 1 : 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          toValue: isOpened ? {x: 0, y: 0} : {x: -15, y: -28},
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: isOpened ? 0 : 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(heighDropdown, {
          toValue: isOpened ? 0 : 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {});
    }
  }, [isOpened]);

  const animatedField = useCallback(() => {
    Animated.parallel([
      Animated.timing(scaleTitle, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(moveTitle, {
        toValue: {x: -15, y: -30},
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(heighDropdown, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsOpended(false);
    });
  }, []);

  // console.log(options);

  return (
    <Container>
      <SelectField isOpened={isOpened} onPress={() => openModal()}>
        {optionSelected ? <Value>{optionSelected}</Value> : undefined}
        <CardTitle
          style={{
            translateY: moveTitle.y,
            translateX: moveTitle.x,
            transform: [{scale: scaleTitle}],
          }}>
          <Title isOpened={isOpened}>{title}</Title>
        </CardTitle>
        <Icon source={arrowDown} />
      </SelectField>

      <Dropdown
        style={{opacity: fadeAnim, transform: [{scaleY: heighDropdown}]}}>
        {options.map((item) => (
          <Select
            key={item}
            onPress={() => {
              setOptionSelected(item), animatedField();
            }}>
            <Option>{item}</Option>
          </Select>
        ))}
      </Dropdown>
    </Container>
  );
};

export default Picker;
