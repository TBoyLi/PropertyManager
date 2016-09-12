package com.propertymanager;

import android.app.Application;
import android.util.Log;

import com.airbnb.android.react.maps.MapsPackage;
import com.chinaztt.encapsulation.EncryptionReactPackager;
import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.facebook.react.ReactApplication;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.imagepicker.ImagePickerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new PickerPackage(),
          new BarcodeScannerPackage(),
          new ImagePickerPackage(),
          new EncryptionReactPackager(),
          new MapsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
