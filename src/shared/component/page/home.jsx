import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'

const HomePage = () => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />

      <form>
        <h3>Oven Type</h3>
        <label>
          <input type="radio" name="stove" value="gas" />
        Gas Stove
      </label>
        <label>
          <input type="radio" name="stove" value="electric" />
      Electric Stove
    </label>
      <label>
        <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
        <h3>Stove Type</h3>
        <label>
          <input type="radio" name="oven" value="gas" />
        Gas Oven
      </label>
      <label>
        <input type="radio" name="oven" value="electric" />
      Electric Oven
    </label>
      <label>
        <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
        <h3>Mixer Type</h3>
        <label>
          <input type="radio" name="mixer" value="kitchenaid" />
        Kitchen Aid Mixer
      </label>
        <label>
          <input type="radio" name="mixer" value="other" />
      Other
    </label>
      <label>
        <input type="radio" name="mixer" value="nopref" />
    No Preference
  </label>
        <h3>Blender Type</h3>
        <label>
          <input type="radio" name="blender" value="vitamix" />
        Vitamix
      </label>
        <label>
          <input type="radio" name="blender" value="other" />
      Other
    </label>
        <label>
          <input type="radio" name="blender" value="nopref" />
    No Preference
  </label>
        <h3>Refrigerator Type</h3>
        <label>
          <input type="radio" name="refrigerator" value="stainless" />
        Stainless Steel
      </label>
        <label>
          <input type="radio" name="refrigerator" value="deepfreeze" />
      Deep Freeze
    </label>
      <label>
        <input type="radio" name="refrigerator" value="nopref" />
    No Preference
  </label>
      </form>
    </div>
  )
}

export default HomePage
