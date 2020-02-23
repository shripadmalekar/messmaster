package shripad.cadacproject.findyourmeal;

import androidx.fragment.app.FragmentActivity;
import shripad.cadacproject.findyourmeal.activity.DetailActivity;
import shripad.cadacproject.findyourmeal.activity.LoginActivity;
import shripad.cadacproject.findyourmeal.model.Mess;
import shripad.cadacproject.findyourmeal.utils.Constants;
import shripad.cadacproject.findyourmeal.utils.Utils;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

import java.util.ArrayList;
import java.util.Arrays;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    ArrayList<Mess> messarrylist = new ArrayList<Mess>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);

        //loadMess();
        //onMapReady(googleMap);
    }

    @Override
    protected void onResume() {
        super.onResume();
        //loadMess();
        //onMapReady(googleMap);
    }

    void loadMess() {


    }

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can adsd markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
//        mMap = googleMap;
//
//        // Add a marker in Sydney and move the camera
//        LatLng sydney = new LatLng(-34, 151);
//        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
//        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));
        mMap = googleMap;




        //LatLng []positions=new LatLng[messarrylist.size()];

        messarrylist.clear();
        final String url = Utils.getUrl(Constants.PATH_MESS);
        Ion.with(this)
                .load(url)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>() {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {
                        String status = result.get("status").getAsString();
                        if (status.equals("success")) {
                            JsonArray tempProducts = result.get("data").getAsJsonArray();
                            for (int index = 0; index < tempProducts.size(); index++) {
                                JsonObject object = tempProducts.get(index).getAsJsonObject();

                                Log.e("latitude",object.get("latitude").getAsString());

                                String lat = object.get("latitude").getAsString();
                                double d = Double.parseDouble(lat);
                                Log.e("latitude double",""+d);

                                String lan = object.get("longitude").getAsString();

                                double d2 = Double.parseDouble(lan);
                                Log.e("latitude double",""+d2);

                                Mess mess = new Mess();
                                mess.setMessid(object.get("messid").getAsInt());
                                mess.setMessname(object.get("messname").getAsString());
                                mess.setMessaddress(object.get("messaddress").getAsString());
                                mess.setMesscontact(object.get("messcontact").getAsString());
                                mess.setMessowner(object.get("messowner").getAsString());
                                mess.setLatitude(d2);
                                mess.setLongitude(d);
                                mess.setMespassword(object.get("messpassword").getAsString());
                                messarrylist.add(mess);
                            }
                            // adapter.notifyDataSetChanged();
                            Log.e("list",messarrylist.toString());
                            LatLng []positions=new LatLng[messarrylist.size()];
                            for(int i=0;i<messarrylist.size();i++){
                                double lat= messarrylist.get(i).getLatitude();
                                double lan= messarrylist.get(i).getLongitude();
                                positions[i]=new LatLng(lat,lan);
                            }


                            Log.e("position", String.valueOf(positions[0]));

                            for (LatLng location : positions) {
                                MarkerOptions options = new MarkerOptions();
                                options.position(location);
                                options.title("I am here"+location);

                                //markposition =positions[location];
                                // options.icon(BitmapDescriptorFactory.fromResource(R.drawable.ic_car));
                                mMap.addMarker(options);
                                mMap.moveCamera(CameraUpdateFactory.newLatLng(location));
                                CameraPosition cameraPosition = new CameraPosition.Builder().target(location).zoom(17).build();
                                googleMap.animateCamera(CameraUpdateFactory.newCameraPosition(cameraPosition));
                            }

                            mMap.setOnMarkerClickListener(new GoogleMap.OnMarkerClickListener() {
                                @Override
                                public boolean onMarkerClick(Marker marker) {
                                    Intent intent=new Intent(MapsActivity.this, DetailActivity.class);

                                    String markposition1 =marker.getId();
                                    int id= Integer.parseInt(markposition1.substring(markposition1.length()-1));
                                    Toast.makeText(MapsActivity.this, markposition1.substring(markposition1.length()-1), Toast.LENGTH_SHORT).show();
                                    intent.putExtra("name",messarrylist.get(id).getMessname());
                                    intent.putExtra("address",messarrylist.get(id).getMessaddress());
                                    intent.putExtra("contact",messarrylist.get(id).getMesscontact());

                                    startActivity(intent);

                                    return false;
                                }
                            });
                        }
                    }
                });





    }
}
