package com.template;

import com.facebook.react.ReactActivity;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

  @Override
  public void onConfigurationChanged(Configuration configuration) {
    super.onConfigurationChanged(configuration);
    getReactInstanceManager()
      .onConfigurationChanged(this, configuration);
  }

  @Override
  protected String getMainComponentName() {
    return "Template";
  }
}
