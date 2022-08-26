import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Card } from '../components/Card'

const stories = storiesOf('Card', module)

stories.add('Default', () => (
  <Card onClick={action('onClick card')}>
    <h1>Hello Card</h1>
  </Card>
))
