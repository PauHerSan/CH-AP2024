package org.generation.pandevs.model;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class OrderEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_order", nullable = false)
	private Long idOrder;
	
	@Column(name = "date", nullable = false, columnDefinition = "DATETIME")
	private LocalDateTime date;
	
	@Column(name = "total", nullable = false, columnDefinition = "Decimal(5,2)")
	private Double total;
	
	@Id
	@Column(name = "id_user", nullable = false)
	private Long idUser;

	
	public OrderEntity() {

	}

	public OrderEntity(Long idOrder, LocalDateTime date, Double total, Long idUser) {
		this.idOrder = idOrder;
		this.date = date;
		this.total = total;
		this.idUser = idUser;
	}

	public Long getIdOrder() {
		return idOrder;
	}

	public void setIdOrder(Long idOrder) {
		this.idOrder = idOrder;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	@Override
	public String toString() {
		return "OrderEntity [idOrder=" + idOrder + ", date=" + date + ", total=" + total + ", idUser=" + idUser + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(date, idOrder, idUser, total);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrderEntity other = (OrderEntity) obj;
		return Objects.equals(date, other.date) && Objects.equals(idOrder, other.idOrder)
				&& Objects.equals(idUser, other.idUser) && Objects.equals(total, other.total);
	}
	
	
	
	
	
	
	
	
	

}