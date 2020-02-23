package shripad.cadacproject.findyourmeal.model;

public class Mess {
    int messid;
    String messname;
    String messaddress;
    String messowner;
    String messcontact;
    String mespassword;
    double longitude;
    double latitude;

    public Mess() {
    }

    public Mess(int messid, String messname, String messaddress, String messowner, String messcontact, String mespassword, double longitude, double latitude, String role) {
        this.messid = messid;
        this.messname = messname;
        this.messaddress = messaddress;
        this.messowner = messowner;
        this.messcontact = messcontact;
        this.mespassword = mespassword;
        this.longitude = longitude;
        this.latitude = latitude;
        this.role = role;
    }


    String role;

    public int getMessid() {
        return messid;
    }

    public void setMessid(int messid) {
        this.messid = messid;
    }

    public String getMessname() {
        return messname;
    }

    public void setMessname(String messname) {
        this.messname = messname;
    }

    public String getMessaddress() {
        return messaddress;
    }

    public void setMessaddress(String messaddress) {
        this.messaddress = messaddress;
    }

    public String getMessowner() {
        return messowner;
    }

    public void setMessowner(String messowner) {
        this.messowner = messowner;
    }

    public String getMesscontact() {
        return messcontact;
    }

    public void setMesscontact(String messcontact) {
        this.messcontact = messcontact;
    }

    public String getMespassword() {
        return mespassword;
    }

    public void setMespassword(String mespassword) {
        this.mespassword = mespassword;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "Mess{" +
                "messid=" + messid +
                ", messname='" + messname + '\'' +
                ", messaddress='" + messaddress + '\'' +
                ", messowner='" + messowner + '\'' +
                ", messcontact='" + messcontact + '\'' +
                ", mespassword='" + mespassword + '\'' +
                ", longitude='" + longitude + '\'' +
                ", latitude='" + latitude + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
