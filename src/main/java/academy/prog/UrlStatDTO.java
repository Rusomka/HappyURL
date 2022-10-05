package academy.prog;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class UrlStatDTO extends UrlResultDTO {
    private long redirects;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm", timezone = "UTC")
    private Date lastAccess; // TODO: set normal format

    public long getRedirects() {
        return redirects;
    }

    public void setRedirects(long redirects) {
        this.redirects = redirects;
    }

    public Date getLastAccess() {
        return lastAccess;
    }

    public void setLastAccess(Date lastAccess) {
        this.lastAccess = lastAccess;
    }
}
